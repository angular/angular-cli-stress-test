/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4474Component } from './comp-4474.component';

describe('Comp4474Component', () => {
  let component: Comp4474Component;
  let fixture: ComponentFixture<Comp4474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
