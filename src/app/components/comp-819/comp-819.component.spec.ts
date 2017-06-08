/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp819Component } from './comp-819.component';

describe('Comp819Component', () => {
  let component: Comp819Component;
  let fixture: ComponentFixture<Comp819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
