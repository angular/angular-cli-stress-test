/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3332Component } from './comp-3332.component';

describe('Comp3332Component', () => {
  let component: Comp3332Component;
  let fixture: ComponentFixture<Comp3332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
