/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp226Component } from './comp-226.component';

describe('Comp226Component', () => {
  let component: Comp226Component;
  let fixture: ComponentFixture<Comp226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
