/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp523Component } from './comp-523.component';

describe('Comp523Component', () => {
  let component: Comp523Component;
  let fixture: ComponentFixture<Comp523Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp523Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp523Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
