/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3735Component } from './comp-3735.component';

describe('Comp3735Component', () => {
  let component: Comp3735Component;
  let fixture: ComponentFixture<Comp3735Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3735Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
