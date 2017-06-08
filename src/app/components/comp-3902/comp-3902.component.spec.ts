/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3902Component } from './comp-3902.component';

describe('Comp3902Component', () => {
  let component: Comp3902Component;
  let fixture: ComponentFixture<Comp3902Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3902Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3902Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
