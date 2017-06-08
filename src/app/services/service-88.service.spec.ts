/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service88Service } from './service-88.service';

describe('Service88Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service88Service]
    });
  });

  it('should ...', inject([Service88Service], (service: Service88Service) => {
    expect(service).toBeTruthy();
  }));
});
