/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3681Component } from './comp-3681.component';

describe('Comp3681Component', () => {
  let component: Comp3681Component;
  let fixture: ComponentFixture<Comp3681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
