/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2121Component } from './comp-2121.component';

describe('Comp2121Component', () => {
  let component: Comp2121Component;
  let fixture: ComponentFixture<Comp2121Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2121Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2121Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
