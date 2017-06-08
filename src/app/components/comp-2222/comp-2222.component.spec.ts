/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2222Component } from './comp-2222.component';

describe('Comp2222Component', () => {
  let component: Comp2222Component;
  let fixture: ComponentFixture<Comp2222Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2222Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2222Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
