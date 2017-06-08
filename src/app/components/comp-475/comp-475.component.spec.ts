/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp475Component } from './comp-475.component';

describe('Comp475Component', () => {
  let component: Comp475Component;
  let fixture: ComponentFixture<Comp475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
