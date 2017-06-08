/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3612Component } from './comp-3612.component';

describe('Comp3612Component', () => {
  let component: Comp3612Component;
  let fixture: ComponentFixture<Comp3612Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3612Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3612Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
