/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp792Component } from './comp-792.component';

describe('Comp792Component', () => {
  let component: Comp792Component;
  let fixture: ComponentFixture<Comp792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
