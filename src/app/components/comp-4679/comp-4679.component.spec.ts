/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4679Component } from './comp-4679.component';

describe('Comp4679Component', () => {
  let component: Comp4679Component;
  let fixture: ComponentFixture<Comp4679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
