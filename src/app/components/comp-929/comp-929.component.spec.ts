/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp929Component } from './comp-929.component';

describe('Comp929Component', () => {
  let component: Comp929Component;
  let fixture: ComponentFixture<Comp929Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp929Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp929Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
