/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp246Component } from './comp-246.component';

describe('Comp246Component', () => {
  let component: Comp246Component;
  let fixture: ComponentFixture<Comp246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
