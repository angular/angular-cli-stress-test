/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3535Component } from './comp-3535.component';

describe('Comp3535Component', () => {
  let component: Comp3535Component;
  let fixture: ComponentFixture<Comp3535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
