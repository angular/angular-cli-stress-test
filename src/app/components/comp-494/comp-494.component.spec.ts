/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp494Component } from './comp-494.component';

describe('Comp494Component', () => {
  let component: Comp494Component;
  let fixture: ComponentFixture<Comp494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
