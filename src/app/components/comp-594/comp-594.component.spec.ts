/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp594Component } from './comp-594.component';

describe('Comp594Component', () => {
  let component: Comp594Component;
  let fixture: ComponentFixture<Comp594Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp594Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp594Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
