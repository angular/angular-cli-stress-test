/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2819Component } from './comp-2819.component';

describe('Comp2819Component', () => {
  let component: Comp2819Component;
  let fixture: ComponentFixture<Comp2819Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2819Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2819Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
