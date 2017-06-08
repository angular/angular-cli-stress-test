/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3403Component } from './comp-3403.component';

describe('Comp3403Component', () => {
  let component: Comp3403Component;
  let fixture: ComponentFixture<Comp3403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
