/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3531Component } from './comp-3531.component';

describe('Comp3531Component', () => {
  let component: Comp3531Component;
  let fixture: ComponentFixture<Comp3531Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3531Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3531Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
