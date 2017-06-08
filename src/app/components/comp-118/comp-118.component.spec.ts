/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp118Component } from './comp-118.component';

describe('Comp118Component', () => {
  let component: Comp118Component;
  let fixture: ComponentFixture<Comp118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
