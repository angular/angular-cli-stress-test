/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4819Component } from './comp-4819.component';

describe('Comp4819Component', () => {
  let component: Comp4819Component;
  let fixture: ComponentFixture<Comp4819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
