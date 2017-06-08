/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3517Component } from './comp-3517.component';

describe('Comp3517Component', () => {
  let component: Comp3517Component;
  let fixture: ComponentFixture<Comp3517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
