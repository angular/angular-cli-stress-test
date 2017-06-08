/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2149Component } from './comp-2149.component';

describe('Comp2149Component', () => {
  let component: Comp2149Component;
  let fixture: ComponentFixture<Comp2149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
