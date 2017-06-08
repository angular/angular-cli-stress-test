/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service467Service } from './service-467.service';

describe('Service467Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service467Service]
    });
  });

  it('should ...', inject([Service467Service], (service: Service467Service) => {
    expect(service).toBeTruthy();
  }));
});
