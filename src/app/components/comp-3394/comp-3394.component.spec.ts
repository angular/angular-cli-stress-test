/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3394Component } from './comp-3394.component';

describe('Comp3394Component', () => {
  let component: Comp3394Component;
  let fixture: ComponentFixture<Comp3394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
