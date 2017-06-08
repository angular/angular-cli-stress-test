/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1153Component } from './comp-1153.component';

describe('Comp1153Component', () => {
  let component: Comp1153Component;
  let fixture: ComponentFixture<Comp1153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
