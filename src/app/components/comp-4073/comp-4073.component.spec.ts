/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4073Component } from './comp-4073.component';

describe('Comp4073Component', () => {
  let component: Comp4073Component;
  let fixture: ComponentFixture<Comp4073Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4073Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4073Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
