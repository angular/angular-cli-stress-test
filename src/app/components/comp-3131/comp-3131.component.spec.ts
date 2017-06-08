/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3131Component } from './comp-3131.component';

describe('Comp3131Component', () => {
  let component: Comp3131Component;
  let fixture: ComponentFixture<Comp3131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
