/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3747Component } from './comp-3747.component';

describe('Comp3747Component', () => {
  let component: Comp3747Component;
  let fixture: ComponentFixture<Comp3747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
