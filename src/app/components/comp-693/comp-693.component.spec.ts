/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp693Component } from './comp-693.component';

describe('Comp693Component', () => {
  let component: Comp693Component;
  let fixture: ComponentFixture<Comp693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
