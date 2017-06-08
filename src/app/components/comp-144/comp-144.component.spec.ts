/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp144Component } from './comp-144.component';

describe('Comp144Component', () => {
  let component: Comp144Component;
  let fixture: ComponentFixture<Comp144Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp144Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp144Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
