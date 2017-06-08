/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3286Component } from './comp-3286.component';

describe('Comp3286Component', () => {
  let component: Comp3286Component;
  let fixture: ComponentFixture<Comp3286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
