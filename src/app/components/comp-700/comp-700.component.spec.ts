/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp700Component } from './comp-700.component';

describe('Comp700Component', () => {
  let component: Comp700Component;
  let fixture: ComponentFixture<Comp700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
