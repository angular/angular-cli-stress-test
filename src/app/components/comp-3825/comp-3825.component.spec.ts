/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3825Component } from './comp-3825.component';

describe('Comp3825Component', () => {
  let component: Comp3825Component;
  let fixture: ComponentFixture<Comp3825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
