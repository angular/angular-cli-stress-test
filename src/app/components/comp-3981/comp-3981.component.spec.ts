/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3981Component } from './comp-3981.component';

describe('Comp3981Component', () => {
  let component: Comp3981Component;
  let fixture: ComponentFixture<Comp3981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
