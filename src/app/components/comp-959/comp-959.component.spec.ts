/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp959Component } from './comp-959.component';

describe('Comp959Component', () => {
  let component: Comp959Component;
  let fixture: ComponentFixture<Comp959Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp959Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
