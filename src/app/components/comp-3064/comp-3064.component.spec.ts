/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3064Component } from './comp-3064.component';

describe('Comp3064Component', () => {
  let component: Comp3064Component;
  let fixture: ComponentFixture<Comp3064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
