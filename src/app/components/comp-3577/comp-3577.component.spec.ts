/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3577Component } from './comp-3577.component';

describe('Comp3577Component', () => {
  let component: Comp3577Component;
  let fixture: ComponentFixture<Comp3577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
