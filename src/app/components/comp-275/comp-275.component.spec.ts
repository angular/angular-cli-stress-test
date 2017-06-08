/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp275Component } from './comp-275.component';

describe('Comp275Component', () => {
  let component: Comp275Component;
  let fixture: ComponentFixture<Comp275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
