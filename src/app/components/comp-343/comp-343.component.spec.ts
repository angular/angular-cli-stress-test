/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp343Component } from './comp-343.component';

describe('Comp343Component', () => {
  let component: Comp343Component;
  let fixture: ComponentFixture<Comp343Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp343Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp343Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
