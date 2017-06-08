/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2195Component } from './comp-2195.component';

describe('Comp2195Component', () => {
  let component: Comp2195Component;
  let fixture: ComponentFixture<Comp2195Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2195Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
