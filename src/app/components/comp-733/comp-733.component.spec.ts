/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp733Component } from './comp-733.component';

describe('Comp733Component', () => {
  let component: Comp733Component;
  let fixture: ComponentFixture<Comp733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
