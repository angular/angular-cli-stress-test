/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp511Component } from './comp-511.component';

describe('Comp511Component', () => {
  let component: Comp511Component;
  let fixture: ComponentFixture<Comp511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
