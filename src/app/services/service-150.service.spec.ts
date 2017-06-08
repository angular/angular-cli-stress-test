/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service150Service } from './service-150.service';

describe('Service150Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service150Service]
    });
  });

  it('should ...', inject([Service150Service], (service: Service150Service) => {
    expect(service).toBeTruthy();
  }));
});
