/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2116Component } from './comp-2116.component';

describe('Comp2116Component', () => {
  let component: Comp2116Component;
  let fixture: ComponentFixture<Comp2116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
