/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3398Component } from './comp-3398.component';

describe('Comp3398Component', () => {
  let component: Comp3398Component;
  let fixture: ComponentFixture<Comp3398Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3398Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3398Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
