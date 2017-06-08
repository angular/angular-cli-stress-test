/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3641Component } from './comp-3641.component';

describe('Comp3641Component', () => {
  let component: Comp3641Component;
  let fixture: ComponentFixture<Comp3641Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3641Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3641Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
