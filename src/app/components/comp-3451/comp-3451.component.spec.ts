/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3451Component } from './comp-3451.component';

describe('Comp3451Component', () => {
  let component: Comp3451Component;
  let fixture: ComponentFixture<Comp3451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
