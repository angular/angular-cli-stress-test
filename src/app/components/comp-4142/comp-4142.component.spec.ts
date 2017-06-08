/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4142Component } from './comp-4142.component';

describe('Comp4142Component', () => {
  let component: Comp4142Component;
  let fixture: ComponentFixture<Comp4142Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4142Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4142Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
